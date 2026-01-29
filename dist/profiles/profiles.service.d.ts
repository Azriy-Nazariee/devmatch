import type { CreateProfileDto } from './dto/create-profile.dto';
import type { UpdateProfileDto } from './dto/update-profile.dto';
import type { Model } from 'mongoose';
import { Profile, ProfileDocument } from './schema/profile.schema';
export declare class ProfilesService {
    private profileModel;
    constructor(profileModel: Model<ProfileDocument>);
    findAll(): Promise<Profile[]>;
    findOne(id: string): Promise<Profile>;
    create(createProfileDto: CreateProfileDto): Promise<Profile>;
    update(id: string, updateProfileDto: UpdateProfileDto): Promise<Profile>;
    removeAll(): Promise<void>;
    remove(id: string): Promise<void>;
}
