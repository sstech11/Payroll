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
import { PayrollProcessingWhereInput } from "./PayrollProcessingWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PayrollProcessingCountArgs {
  @ApiProperty({
    required: false,
    type: () => PayrollProcessingWhereInput,
  })
  @Field(() => PayrollProcessingWhereInput, { nullable: true })
  @Type(() => PayrollProcessingWhereInput)
  where?: PayrollProcessingWhereInput;
}

export { PayrollProcessingCountArgs as PayrollProcessingCountArgs };
