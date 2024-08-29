type Props = {
  name: string;
  description?: string;
  image: string;
};

{
  /*Styles for Text Div */
}
const overlayStyles = `p-5 absolute z-30 flex h-[350px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center 
text-wite opacity-0 transition duration-500 hover:opacity-90`;
const Class = ({ name, description, image }: Props) => {
  {
    /*SINCE WE ARE IN A LIST ELEMENT */
  }
  return (
    //PER ELEMENT
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      {/*this will be on top of image */}
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt={`image-`} />
    </li>
  );
};

export default Class;
