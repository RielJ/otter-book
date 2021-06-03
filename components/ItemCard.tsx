import Image from "next/image";
export interface ItemCardProps {
  src: string;
  name: string;
  hideTitle?: Boolean;
}

const ItemCard: React.SFC<ItemCardProps> = ({
  src,
  name,
  hideTitle = false,
}) => {
  return (
    <div className="hover:shadow-lg cursor-pointer relative rounded-md overflow-hidden card p-1 shadow-lg">
      <div className="relative px-4 py-10 shadow-lg sm:p-20">
        <div className="h-64 w-96">
          <Image layout="fill" objectFit="cover" src={src} alt={name} />
        </div>
      </div>
      {!hideTitle && (
        <div className="absolute inset-0 z-10 text-center flex flex-col items-center justify-end opacity-100 duration-300">
          <div className="bg-white bg-opacity-50 font-mono py-2 w-full text-3xl font-bold text-center">
            {name}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
