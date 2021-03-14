import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty({
    required: true,
    description: 'Student name',
    default: 'Ambrogio',
  })
  name: string;

  @ApiProperty({
    required: true,
    description: 'Student surname',
    default: 'Castroni',
  })
  surname: string;
}
