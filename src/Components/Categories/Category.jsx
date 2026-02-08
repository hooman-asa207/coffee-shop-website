export default function Category({ ...props }) {
    return (
    <a href="#" className="flex flex-col justify-center items-center text-center">
      <img src={props.image} className="sm:size-50 size-25" alt="category" />
      {props.title}
    </a>
  );
}
