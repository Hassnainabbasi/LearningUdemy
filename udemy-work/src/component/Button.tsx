export default function Button({ text = "Submit" }) {
  return (
    <div>
      <button
        style={{
          padding: 20,
          border: "1px solid red",
          backgroundColor: "tomato",
        }}
        className="border"
      >
        {text}
      </button>
    </div>
  );
}
