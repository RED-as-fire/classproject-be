import { ApiProperty } from '@nestjs/swagger';

export class CreateClassroomDto {
  @ApiProperty({
    required: true,
    description: 'Classroom code',
    default: 'A01',
  })
  code: string;
  @ApiProperty({​​​
    required: true,
    description: 'Classroom capacity',
    default: '20',
    }​​​​)
  capacity: number;

  @ApiProperty({​​​
    required: true,
    description: 'Students array',
    default: [1],
    }​​​​)
  studentIDs: number[];
}
