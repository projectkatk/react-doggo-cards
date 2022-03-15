import Dog from "./Dog"

export default function App(props) {
  setTimeout(() => {
    document.querySelector('.bounce').classList.add('bounced');
  }, 1000)
  
    return (
      <div>
        <h1>
          The <span className="bounce">Doggo</span> Cards 
          <span><i className="fa-solid fa-heart"></i></span>
        </h1>
      <div className="section-wrapper">
        {props.dogs.map(dog =>
          <Dog
            key={dog.id}
            {... dog}
          />
        )}
      </div>
      </div>
     
    ); 
}

