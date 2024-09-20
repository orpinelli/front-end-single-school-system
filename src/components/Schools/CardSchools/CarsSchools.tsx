import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface CardSchoolsProps {
  name: string;
  address: string;
  image: string;
}

export default function CardSchools({
  name,
  address,
  image,
}: CardSchoolsProps) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{name}</h4>
        <small className="text-default-500">{address}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt={`Imagem da escola ${name}`}
          className="object-cover rounded-xl"
          src={image}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
