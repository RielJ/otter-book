import Image from "next/image";
export interface OtterProps {
  src: string;
  name: string;
}

const Otter: React.SFC<OtterProps> = ({ src, name }) => {
  return (
    <div className="hover:shadow-lg cursor-pointer card">
      <Image
        layout="responsive"
        height={500}
        width={500}
        src={src}
        alt={name}
      />
      <div className="text-lg font-semibold m-4">{name}</div>
    </div>
  );
};

export default Otter;
