import { useParams } from "react-router-dom";
import {  getcorse } from "./data/data";

const Corse = () => {


  const params = useParams();
  const Corse = getcorse(params.id);

  if (Corse) {
    return (
      <>
      <div className="d-flex  " >

        <div className="allbook btn btn-primary my-2 mx-2  p-2 d-flex"  style={{ maxWidth: "250px", height: "270px" }}>
          <div class="card p-1" style={{ maxWidth: "200px", height: "250px" }}>
            <img class="card-img-top" src={Corse.image} alt="im" />
            <div class="card-body">
              <h5 class="card-title">{Corse.name}</h5>
              <p class="card-text">{Corse.tittlename}</p>
            </div>
          </div>
        </div>
        <div className="allbook btn btn-warning  p-2  d-flex"  style={{ maxWidth: "200px", height: "270px" }}>
          <div class="card p-1" style={{ maxWidth: "200px", height: "250px" }}>
            <img class="card-img-top" src={Corse.image} alt="im" />
            <div class="card-body">
              <h5 class="card-title">{Corse.name}</h5>
              <p class="card-text">{Corse.tittlename}</p>
            </div>
          </div>
        </div>
        <div className="allbook btn btn-danger  p-2  d-flex"  style={{ maxWidth: "200px", height: "270px" }}>
          <div class="card p-1" style={{ maxWidth: "200px", height: "250px" }}>
            <img class="card-img-top" src={Corse.image} alt="im" />
            <div class="card-body">
              <h5 class="card-title">{Corse.name}</h5>
              <p class="card-text">{Corse.tittlename}</p>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
};
export default Corse;
