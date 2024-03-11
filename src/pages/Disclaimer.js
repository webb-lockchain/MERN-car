import MainLayout from "../layouts/MainLayout";
import { Typography } from "@material-tailwind/react";  

export default function Disclaimer() {
    return(
      <MainLayout>
        <Typography variant="h1" className="text-center py-8">Disclaimer</Typography>
      </MainLayout>
    )
  }