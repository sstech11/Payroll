/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PayrollProcessingWhereInput } from "./PayrollProcessingWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PayrollProcessingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PayrollProcessingWhereInput,
  })
  @ValidateNested()
  @Type(() => PayrollProcessingWhereInput)
  @IsOptional()
  @Field(() => PayrollProcessingWhereInput, {
    nullable: true,
  })
  every?: PayrollProcessingWhereInput;

  @ApiProperty({
    required: false,
    type: () => PayrollProcessingWhereInput,
  })
  @ValidateNested()
  @Type(() => PayrollProcessingWhereInput)
  @IsOptional()
  @Field(() => PayrollProcessingWhereInput, {
    nullable: true,
  })
  some?: PayrollProcessingWhereInput;

  @ApiProperty({
    required: false,
    type: () => PayrollProcessingWhereInput,
  })
  @ValidateNested()
  @Type(() => PayrollProcessingWhereInput)
  @IsOptional()
  @Field(() => PayrollProcessingWhereInput, {
    nullable: true,
  })
  none?: PayrollProcessingWhereInput;
}
export { PayrollProcessingListRelationFilter as PayrollProcessingListRelationFilter };
