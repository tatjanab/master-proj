type CallbackProps = {
  handleColor: (color: string) => void;
};

function Callback({ handleColor }: CallbackProps) {
  const handleColorChange = (e) => {
    handleColor(e.target.value);
  };

  return (
    <div>
      <h2>Change the box color here: </h2>
      <input
        type='text'
        name='text'
        id='color'
        onChange={handleColorChange}
        style={{ color: "black" }}
      />
    </div>
  );
}

export default Callback;
