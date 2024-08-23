import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <div>
        <div> 
          <h1 className='' >Skeleton App</h1>
          <p>Aqui comienza todo</p>
        </div>
        <div>
          <h2>
            Bienvenidos
          </h2>
          <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        </div>
        
      </div>
    </div>
  );
};

export default ExploreContainer;
