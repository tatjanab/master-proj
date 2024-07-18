function Callback({ getColor }: { getColor: (color: string) => void }) {
  return (
    <div>
      <h2>Change the box color here: </h2>
      <input
        onChange={(e) => getColor(e.target.value)}
        type='text'
        name='text'
        id='color'
      />
    </div>
  );
}

export default Callback;
