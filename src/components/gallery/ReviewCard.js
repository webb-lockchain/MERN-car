import {Card, CardBody,  Typography} from "@material-tailwind/react";
import {Rating} from "@material-tailwind/react";

export function ReviewCard(props) {
    const {rate} = props;

    return (
        <Card className="w-full mt-6 w-[250px] mx-auto">
            <CardBody>
                <Rating value={rate?rate:5}/>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                    "brilliand and helpful"
                </Typography>
                <Typography variant='small'>
                    Mark was very helpful with the purchase of my Isuzu, staff very friendly, would
                    recommend to friends...
                </Typography>
                <Typography variant='small' className="text-gray-500">
                    Jake - Monday, October 9, 2023
                </Typography>
            </CardBody>
        </Card>
    );
}