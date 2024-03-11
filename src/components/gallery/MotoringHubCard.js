import {Card, CardHeader, CardBody, CardFooter, Typography} from "@material-tailwind/react";

import {Link} from 'react-router-dom'

export function MotoringHubCard(props) {
    const {name, desc, type, image, url} = props;
    return (
            <Card className="max-w-[300px] mx-auto overflow-hidden">
                <CardHeader floated={false} color="blue-gray" className=" m-0 rounded-md">
                    <img src={image} alt={name}/>
                </CardHeader>
                <CardBody className='px-3'>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {name}
                    </Typography>
                    <Typography variant="lead" className="h-[90px] overflow-hidden">
                        {desc}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0 px-3 flex justify-between items-center">
                    <Link
                        to={url}
                        className="bg-gray-800 border-2 border-gray-700 rounded-full text-white hover:text-gray-800 cursor-pointer  text-base font-semibold leading-6 px-3 py-2 text-center no-underline transition-all duration-150 ease-in-out select-none align-middle hover:bg-white">{type}</Link>

                </CardFooter>
            </Card>
    );
}