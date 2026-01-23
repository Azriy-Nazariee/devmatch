import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import type { CreateProfileDto } from './dto/create-profile.dto';
import type { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'Brianna Watts',
      description: `Looking for someone to merge with my heart. I’m a full-stack romantic who refactors my feelings until they pass all tests. Bonus points if you can debug my issues while we pair program over coffee. Let’s commit to something beautiful together.`
    },
    {
      id: randomUUID(),
      name: 'Jasper Quinn',
      description: `Seeking a partner in crime to compile my heart. Must be comfortable with the terminal because I only speak fluent bash. Swipe right if you can appreciate a good kernel panic every now and then.`
    },
    {
      id: randomUUID(),
      name: 'Leo Park',
      description: `You think you know VIM? Try Neovim. I'll make your modal dreams come true. Want to escape the matrix and explore the perfect keyboard shortcut for love?`
    },
  ];

  findAll(){
    return this.profiles;
  }

  findOne(id: string){
    //throw new NotFoundException(); // if we put execption here, we dont even have to return in the controller, this will bubble up to the controller and return a 404 response
    const matchingprofile = this.profiles.find((profile) => profile.id === id)

    if(!matchingprofile){
        throw new Error(`Profile with ID ${id} not found`);
    }

    return matchingprofile;
  }

  create(createProfileDto: CreateProfileDto){
    const createdProfile = {
        id: randomUUID(),
        ...createProfileDto
    };
    this.profiles.push(createdProfile);
    return createdProfile;
  }

  update(id: string, updateProfileDto: UpdateProfileDto){
    const matchingprofile = this.profiles.find(
        (existingprofile) => existingprofile.id === id      
    );
    if(!matchingprofile){
        throw new NotFoundException(`Profile with ID ${id} not found`);
    }
    matchingprofile.name = updateProfileDto.name;
    matchingprofile.description = updateProfileDto.description;
    return matchingprofile;
  }

  remove(id: string): void{
    const matchingprofileIndex = this.profiles.findIndex(
        (profile) => profile.id === id      
    ); 

    if(matchingprofileIndex === -1){ // if we did find a matching profile (-1 = not found)
       throw new NotFoundException(`Profile with ID ${id} not found`); 
    } 

    this.profiles.splice(matchingprofileIndex, 1) // splice is used to remove items from an array
  }
}
