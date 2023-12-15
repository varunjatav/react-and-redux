

const Time = () => {
    let time = new Date();
  return (
    <div>
        <p className="lead">This is the current Time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
    </div>
  )
}

export default Time