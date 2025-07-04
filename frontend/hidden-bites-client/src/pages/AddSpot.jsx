export default function AddSpot() {
  return (
    <div className="container">
      <h2>Add a New Food Spot</h2>
      <form>
        <input type="text" placeholder="Name" /><br /><br />
        <input type="text" placeholder="Cuisine" /><br /><br />
        <input type="number" placeholder="Rating" /><br /><br />
        <button type="submit">Add Spot</button>
      </form>
    </div>
  );
}
