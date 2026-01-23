import { Controller, Get, Param, Body, Post, Put, Delete, HttpCode, HttpStatus, ParseUUIDPipe, ValidationPipe } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';

@Controller('profiles')
export class ProfilesController {
  constructor(
    private profilesService: ProfilesService
  ) {}

  // GET /profiles
  @Get()
  findAll() {
    return this.profilesService.findAll();
  }

  // GET /profiles/:id
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.profilesService.findOne(id);
  }

  // POST /profiles
  // bash post.sh
  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profilesService.create(createProfileDto);
  }

  /*
  Challenge:
    1. Add the ValidationPipe for the body in our PUT route
    2. Using class-validator, add one or two decorators to UpdateProfileDto to create more granular restrictions for the values.
  */
  // PUT /profiles/:id
  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() updateProfileDto: UpdateProfileDto
  ) {
    return this.profilesService.update(id, updateProfileDto);
  }

  // DELETE /profiles/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: UUID) {
    this.profilesService.remove(id);
  }
}
