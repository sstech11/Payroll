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
import { ApprovalHierarchiesWhereInput } from "./ApprovalHierarchiesWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ApprovalHierarchiesOrderByInput } from "./ApprovalHierarchiesOrderByInput";

@ArgsType()
class ApprovalHierarchiesFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ApprovalHierarchiesWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ApprovalHierarchiesWhereInput, { nullable: true })
  @Type(() => ApprovalHierarchiesWhereInput)
  where?: ApprovalHierarchiesWhereInput;

  @ApiProperty({
    required: false,
    type: [ApprovalHierarchiesOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ApprovalHierarchiesOrderByInput], { nullable: true })
  @Type(() => ApprovalHierarchiesOrderByInput)
  orderBy?: Array<ApprovalHierarchiesOrderByInput>;

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

export { ApprovalHierarchiesFindManyArgs as ApprovalHierarchiesFindManyArgs };
