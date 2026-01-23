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
exports.ProfilesController = void 0;
const common_1 = require("@nestjs/common");
const create_profile_dto_1 = require("./dto/create-profile.dto");
const update_profile_dto_1 = require("./dto/update-profile.dto");
const profiles_service_1 = require("./profiles.service");
const profiles_guard_1 = require("./profiles.guard");
let ProfilesController = class ProfilesController {
    profilesService;
    constructor(profilesService) {
        this.profilesService = profilesService;
    }
    findAll(age) {
        return this.profilesService.findAll();
    }
    findOne(id) {
        try {
            return this.profilesService.findOne(id);
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    create(createProfileDto) {
        return this.profilesService.create(createProfileDto);
    }
    update(id, updateProfileDto) {
        return this.profilesService.update(id, updateProfileDto);
    }
    remove(id) {
        return this.profilesService.remove(id);
    }
};
exports.ProfilesController = ProfilesController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('age')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_profile_dto_1.CreateProfileDto]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_profile_dto_1.UpdateProfileDto]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(profiles_guard_1.ProfilesGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "remove", null);
exports.ProfilesController = ProfilesController = __decorate([
    (0, common_1.Controller)('profiles'),
    __metadata("design:paramtypes", [profiles_service_1.ProfilesService])
], ProfilesController);
//# sourceMappingURL=profiles.controller.js.map