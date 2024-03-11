import MainLayout from "../layouts/MainLayout";
import { Typography } from "@material-tailwind/react";

export default function Electric() {
    return(
      <MainLayout>
        <div className="flex flex-col items-center justify-center w-full px-[20px] py-[60px]">
        <Typography variant="lead">
          Sorry, we have no vehicles in stock that currently match your search.
        </Typography>
        </div>
      </MainLayout>
    )
  }