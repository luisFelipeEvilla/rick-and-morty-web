import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type PropsType = {
  id: number;
  name: string;
  gender: string;
  species: string;
  status: string;
  image: string;
}

export default function CharacterCard(props: PropsType) {
  return (
    <Card className='w-[200px] hover:scale-105 cursor-pointer' >
      <CardMedia
        sx={{ height: 180 }}
        component="img"
        image={props.image}
        alt={props.name}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {props.name}
        </Typography>

        <CardField 
          label='Species'
          value={props.species}
        />

        <CardField 
          label='Status'
          value={props.status}
        />

        <CardField
          label='Gender'
          value={props.gender}
        />
      </CardContent>
    </Card>
  );
};

function CardField(props: { label: string; value: string}) {
  return (
    <div className='flex gap-2' >
      <Typography className='font-semibold' color="text.secondary">{props.label}</Typography>
      <Typography color="text.secondary">{props.value}</Typography>
    </div>
  )
}

