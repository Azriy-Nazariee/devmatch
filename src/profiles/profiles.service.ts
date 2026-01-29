import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import type { CreateProfileDto } from './dto/create-profile.dto';
import type { UpdateProfileDto } from './dto/update-profile.dto';
import type { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Profile, ProfileDocument } from './schema/profile.schema';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectModel(Profile.name) private profileModel: Model<ProfileDocument>,
  ){}

  // private profiles = [
  //   {
  //     id: randomUUID(),
  //     name: 'Brianna Watts',
  //     description: `Looking for someone to merge with my heart. I’m a full-stack romantic who refactors my feelings until they pass all tests. Bonus points if you can debug my issues while we pair program over coffee. Let’s commit to something beautiful together.`
  //   },
  //   {
  //     id: randomUUID(),
  //     name: 'Jasper Quinn',
  //     description: `Seeking a partner in crime to compile my heart. Must be comfortable with the terminal because I only speak fluent bash. Swipe right if you can appreciate a good kernel panic every now and then.`
  //   },
  //   {
  //     id: randomUUID(),
  //     name: 'Leo Park',
  //     description: `You think you know VIM? Try Neovim. I'll make your modal dreams come true. Want to escape the matrix and explore the perfect keyboard shortcut for love?`
  //   },
  // ];

  async findAll(): Promise<Profile[]> {
    return this.profileModel.find().exec();
  }

  async findOne(id: string): Promise<Profile> {
  const profile = await this.profileModel.findById(id).exec();

  if (!profile) {
    // This ensures a 404 status code in the response
    throw new NotFoundException(`Profile with ID ${id} not found`);
  }

  return profile;
}
  create(createProfileDto: CreateProfileDto): Promise<Profile>{
    //const createdProfile = {
    //    id: randomUUID(),
    //    ...createProfileDto
    // };
    const newProfile = new this.profileModel(createProfileDto);

    //this.profiles.push(createdProfile);
    return newProfile.save();
  }

  async update(id: string, updateProfileDto: UpdateProfileDto): Promise<Profile> {
    // const matchingprofile = this.profiles.find(
    //     (existingprofile) => existingprofile.id === id      
    // );
    // if(!matchingprofile){
    //     throw new NotFoundException(`Profile with ID ${id} not found`);
    // }
    // matchingprofile.name = updateProfileDto.name;
    // matchingprofile.description = updateProfileDto.description;
    // return matchingprofile;

    const updatedProfile =  await this.profileModel.findByIdAndUpdate(id, updateProfileDto, { new: true }).exec();

    if(!updatedProfile){
      throw new NotFoundException('Profile with ID ${id} not found.')
    }

    return updatedProfile;
  }

  async removeAll(): Promise<void> {
  await this.profileModel.deleteMany({}).exec();
  }

  async remove(id: string): Promise<void>{
    // const matchingprofileIndex = this.profiles.findIndex(
    //     (profile) => profile.id === id      
    // ); 

    // if(matchingprofileIndex === -1){ // if we did find a matching profile (-1 = not found)
    //    throw new NotFoundException(`Profile with ID ${id} not found`); 
    // } 

    const result = await this.profileModel.findByIdAndDelete(id);

    //this.profiles.splice(matchingprofileIndex, 1) // splice is used to remove items from an array
    if (!result){
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }
  }
}
