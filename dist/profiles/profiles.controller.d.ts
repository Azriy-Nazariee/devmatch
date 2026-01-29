import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
export declare class ProfilesController {
    private profilesService;
    constructor(profilesService: ProfilesService);
    findAll(age: number): Promise<import("./schema/profile.schema").Profile[]>;
    findOne(id: string): Promise<import("./schema/profile.schema").Profile>;
    create(createProfileDto: CreateProfileDto): Promise<import("./schema/profile.schema").Profile>;
    update(id: string, updateProfileDto: UpdateProfileDto): Promise<import("./schema/profile.schema").Profile>;
    remove(id: string): Promise<void>;
    removeAll(): Promise<void>;
}
