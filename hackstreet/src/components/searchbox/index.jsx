import React from "react";
import { MDBCol, MDBIcon } from "mdb-react-ui-kit";


const SearchBox = () => {
    return (
        <MDBCol md="6">
        <form>
          <div className="input-group md-form form-sm form-1 pl-0">
            <input
              className="form-control my-0 py-1"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-prepend">
              <button className="input-group-text purple darken-3" id="basic-text1">
              <MDBIcon className="text-green" icon="search"/>
              </button>
            </div>
          </div>
        </form>
        </MDBCol>
    )
}

export default SearchBox;