"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
let ProfilesService = class ProfilesService {
    profiles = [
        {
            id: (0, crypto_1.randomUUID)(),
            name: 'Brianna Watts',
            description: `Looking for someone to merge with my heart. I’m a full-stack romantic who refactors my feelings until they pass all tests. Bonus points if you can debug my issues while we pair program over coffee. Let’s commit to something beautiful together.`
        },
        {
            id: (0, crypto_1.randomUUID)(),
            name: 'Jasper Quinn',
            description: `Seeking a partner in crime to compile my heart. Must be comfortable with the terminal because I only speak fluent bash. Swipe right if you can appreciate a good kernel panic every now and then.`
        },
        {
            id: (0, crypto_1.randomUUID)(),
            name: 'Leo Park',
            description: `You think you know VIM? Try Neovim. I'll make your modal dreams come true. Want to escape the matrix and explore the perfect keyboard shortcut for love?`
        },
    ];
    findAll() {
        return this.profiles;
    }
    findOne(id) {
        const matchingprofile = this.profiles.find((profile) => profile.id === id);
        if (!matchingprofile) {
            throw new Error(`Profile with ID ${id} not found`);
        }
        return matchingprofile;
    }
    create(createProfileDto) {
        const createdProfile = {
            id: (0, crypto_1.randomUUID)(),
            ...createProfileDto
        };
        this.profiles.push(createdProfile);
        return createdProfile;
    }
    update(id, updateProfileDto) {
        const matchingprofile = this.profiles.find((existingprofile) => existingprofile.id === id);
        if (!matchingprofile) {
            throw new common_1.NotFoundException(`Profile with ID ${id} not found`);
        }
        matchingprofile.name = updateProfileDto.name;
        matchingprofile.description = updateProfileDto.description;
        return matchingprofile;
    }
    remove(id) {
        const matchingprofileIndex = this.profiles.findIndex((profile) => profile.id === id);
        if (matchingprofileIndex === -1) {
            throw new common_1.NotFoundException(`Profile with ID ${id} not found`);
        }
        this.profiles.splice(matchingprofileIndex, 1);
    }
};
exports.ProfilesService = ProfilesService;
exports.ProfilesService = ProfilesService = __decorate([
    (0, common_1.Injectable)()
], ProfilesService);
//# sourceMappingURL=profiles.service.js.map