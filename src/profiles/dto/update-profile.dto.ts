/*
    Challenge:
    1. Add the ValidationPipe for the body in our PUT route
    2. Using class-validator, add a couple of decorators to UpdateProfileDto to create more granular restrictions for the values.
    */

import { IsString, Length } from 'class-validator';

export class UpdateProfileDto{
    @IsString()
    @Length(3, 100)
    name: string;
    @IsString()
    description: string;
}