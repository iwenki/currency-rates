import axios from "axios";

export default function Form(){
  return (
    <div className="informationInput">
      <form>

<div class="input-group mb-3">
  <input type="text" className="form-control" aria-label="Text input with select form"/>
  <select className="form-select" aria-label="Default select example">
        <option selected>Select currency</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
</div>

    </form>
    </div>
  );
}