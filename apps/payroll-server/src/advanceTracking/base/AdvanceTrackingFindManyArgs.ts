/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdvanceTrackingWhereInput } from "./AdvanceTrackingWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AdvanceTrackingOrderByInput } from "./AdvanceTrackingOrderByInput";

@ArgsType()
class AdvanceTrackingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AdvanceTrackingWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AdvanceTrackingWhereInput, { nullable: true })
  @Type(() => AdvanceTrackingWhereInput)
  where?: AdvanceTrackingWhereInput;

  @ApiProperty({
    required: false,
    type: [AdvanceTrackingOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AdvanceTrackingOrderByInput], { nullable: true })
  @Type(() => AdvanceTrackingOrderByInput)
  orderBy?: Array<AdvanceTrackingOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AdvanceTrackingFindManyArgs as AdvanceTrackingFindManyArgs };