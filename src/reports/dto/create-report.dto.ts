import { ApiProperty } from '@nestjs/swagger';
// import { FUELTYPE, TRANSMISSION } from '@prisma/client';
import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateReportDto {
  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(1000000)
  price: number;

  @ApiProperty()
  @IsString()
  make: string;

  @ApiProperty()
  @IsString()
  model: string;
  @ApiProperty()
  @IsString()
  color: string;

  @ApiProperty()
  @IsString()
  transmission: string;

  @ApiProperty()
  @IsString()
  fuel_type: string;

  @ApiProperty()
  @IsNumber()
  @Min(1930)
  @Max(2050)
  year: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(1000000)
  mileage: number;
}
