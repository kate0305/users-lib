import {
  IsDefined,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

import { GENDER_OPTIONS } from 'src/shared/constants';
import { Gender } from 'src/shared/types';
import { createMessage } from 'src/shared/utils/create-message';

export class CreateUserDto {
  @IsDefined(createMessage('First Name'))
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsDefined(createMessage('Last Name'))
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsDefined(createMessage('First Name'))
  @IsPositive()
  height: number;

  @IsDefined(createMessage('Weight'))
  @IsPositive()
  weight: number;

  @IsDefined(createMessage('Gender'))
  @IsNotEmpty()
  @IsIn(GENDER_OPTIONS)
  gender: Gender;

  @IsDefined(createMessage('Residence'))
  @IsNotEmpty()
  @IsString()
  residence: string;

  @IsOptional()
  @IsString()
  photo: string | null;
}
