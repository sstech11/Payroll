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
import { AssignedAssetsWhereInput } from "./AssignedAssetsWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class AssignedAssetsCountArgs {
  @ApiProperty({
    required: false,
    type: () => AssignedAssetsWhereInput,
  })
  @Field(() => AssignedAssetsWhereInput, { nullable: true })
  @Type(() => AssignedAssetsWhereInput)
  where?: AssignedAssetsWhereInput;
}

export { AssignedAssetsCountArgs as AssignedAssetsCountArgs };