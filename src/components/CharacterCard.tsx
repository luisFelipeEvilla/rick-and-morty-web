import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Skeleton } from '@mui/material';

type PropsType = {
  character?: {
    id: number;
    name: string;
    gender: string;
    species: string;
    status: string;
    image: string;
  }
  loading?: boolean;
}

export default function CharacterCard(props: PropsType) {
  return (
    <Card className='w-[200px] h-[350px] hover:scale-105 cursor-pointer' >
      {
        !props.character ?
          <>
            <CardMedia>

              <Skeleton variant="rectangular" height={180} />
            </CardMedia>

            <CardContent>

              <Skeleton variant="text" />

              <Skeleton variant="text" />

              <Skeleton variant="text" />

              <Skeleton variant="text" />

            </CardContent>
          </>

          :
          <>
            <CardMedia
              sx={{ height: 180 }}
              component="img"
              image={props.character.image}
              alt={props.character.name}

            />
            <CardContent>
              <Typography variant="h6" component="div">
                {props.character.name}
              </Typography>

              <CardField
                label='Species'
                value={props.character.species}
              />

              <CardField
                label='Status'
                value={props.character.status}
              />

              <CardField
                label='Gender'
                value={props.character.gender}
              />
            </CardContent>
          </>
      }

    </Card>
  );
};

function CardField(props: { label: string; value: string }) {
  return (
    <div className='flex gap-2' >
      <Typography className='font-semibold' color="text.secondary">{props.label}</Typography>
      <Typography color="text.secondary">{props.value}</Typography>
    </div>
  )
}

