import './App.css';

function Square(){
  return(
    <button className='square'>1</button>
  );
}

export default function Square(){
  return(
    <div>
      <div>
        <button className='square'>X</button>
        <button className='square'>X</button>
        <button className='square'>X</button>
      </div>
      <div>
        <button className='square'>X</button>
        <button className='square'>X</button>
        <button className='square'>X</button>
      </div>
      <div>
        <button className='square'>X</button>
        <button className='square'>X</button>
        <button className='square'>X</button>
      </div>
    </div>
  );
}