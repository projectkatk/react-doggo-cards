export default function Dog(props) {    
       

    return (
        <div className="card">
          <div className="wrap-image">
            <img
              src={props.url}
              alt={props.name} />
            <a href={props.photoSource} target="_blank" rel="noreferrer"> {props.photoName} </a>
          </div>
          <div className="description">
            <h3>{props.name}</h3>
            <div></div>
            <p>{props.description}</p>
            <h4>A little more about {props.name}</h4>
            <ul>
              <li><strong>Size: </strong>{props.size}</li>
              <li><strong>Lifespan: </strong>{props.lifespan}</li>
              <li><strong>Shedding Level: </strong>{props.shedding}</li>
              <li><strong>Temperament: </strong>{props.temperament}</li>
            </ul>
            <small>Information Extracted from <a href={props.sourceURL} target="_blank" rel="noreferrer">{props.sourceName}</a></small>
          </div>
      </div>
       
      );
}