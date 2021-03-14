import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty({
    required: true,
    description: 'Course code',
    default: 'A01',
  })
  code: string;
  @ApiProperty({
    required: true,
    description: 'Course name',
    default: 'Sicurezza Informatica',
  })
  name: string;

  @ApiProperty({
    required: true,
    description: 'Students array',
    default: [1],
  })
  studentIDs: number[];
}
