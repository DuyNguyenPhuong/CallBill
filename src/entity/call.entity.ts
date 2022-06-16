import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn, JoinTable } from 'typeorm';


@Entity('call')
export class Call {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS'
  })
  id: string;

  @Column()
  user_call: string;

  @Column()
  time_call: number;

//   @Column()
//   block_call: string;
}