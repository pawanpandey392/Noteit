function Neteit () {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Got something in your mind?</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Note it down." rows="6"></textarea>
      </div>
      <button type="button" className="btn btn-primary btn-sm">Noteit</button>
    </form>
  );
}

export default Neteit;