"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const profile_schema_1 = require("./schema/profile.schema");
let ProfilesService = class ProfilesService {
    profileModel;
    constructor(profileModel) {
        this.profileModel = profileModel;
    }
    async findAll() {
        return this.profileModel.find().exec();
    }
    async findOne(id) {
        const profile = await this.profileModel.findById(id).exec();
        if (!profile) {
            throw new common_1.NotFoundException(`Profile with ID ${id} not found`);
        }
        return profile;
    }
    create(createProfileDto) {
        const newProfile = new this.profileModel(createProfileDto);
        return newProfile.save();
    }
    async update(id, updateProfileDto) {
        const updatedProfile = await this.profileModel.findByIdAndUpdate(id, updateProfileDto, { new: true }).exec();
        if (!updatedProfile) {
            throw new common_1.NotFoundException('Profile with ID ${id} not found.');
        }
        return updatedProfile;
    }
    async removeAll() {
        await this.profileModel.deleteMany({}).exec();
    }
    async remove(id) {
        const result = await this.profileModel.findByIdAndDelete(id);
        if (!result) {
            throw new common_1.NotFoundException(`Profile with ID ${id} not found`);
        }
    }
};
exports.ProfilesService = ProfilesService;
exports.ProfilesService = ProfilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(profile_schema_1.Profile.name)),
    __metadata("design:paramtypes", [Function])
], ProfilesService);
//# sourceMappingURL=profiles.service.js.map