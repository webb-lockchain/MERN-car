import {Card, CardBody,  Typography} from "@material-tailwind/react";
import {Rating} from "@material-tailwind/react";

export function ReviewCard1({data}) {
    const {rate, title, desc, date, name} = data;

    return (
        <Card className="w-full border-b bg-gray-100 px-6 mx-auto">
            <CardBody className="py-1">
                <Rating value={rate?rate:5}/>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                    {title}
                </Typography>
                <Typography variant='small' className="h-[21px] overflow-hidden">
                    {desc}
                </Typography>
                <Typography variant='small' className="text-gray-500">
                    {name}&nbsp;- &nbsp;{date}
                </Typography>
            </CardBody>
        </Card>
    );
}