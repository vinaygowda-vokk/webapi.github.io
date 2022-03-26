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
exports.UserProfileController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_profile_entity_1 = require("./user-profile.entity");
const user_profile_service_1 = require("./user-profile.service");
const user_profile_swagger_1 = require("./user-profile.swagger");
let UserProfileController = class UserProfileController {
    constructor(userService) {
        this.userService = userService;
    }
    findAll() {
        return this.userService.getUsers();
    }
    findOne(id) {
        return this.userService.getUser(id);
    }
    async create(userContact) {
        try {
            const resp = await this.userService.createUser(userContact);
            return resp;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async editUserProfile(up, id) {
        const upEdited = await this.userService.edituserProfile(id, up);
        return upEdited;
    }
    remove(id) {
        this.userService.remove(id);
    }
};
__decorate([
    (0, swagger_1.ApiTags)('User Profile'),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserProfileController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiTags)('User Profile'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserProfileController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiTags)('User Profile'),
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({
        schema: {
            example: user_profile_swagger_1.UserProfileSwaggerExample,
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_profile_entity_1.user_profile]),
    __metadata("design:returntype", Promise)
], UserProfileController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiTags)('User Profile'),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiBody)({
        schema: {
            example: user_profile_swagger_1.UserProfileSwaggerExample,
        },
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_profile_entity_1.user_profile, Number]),
    __metadata("design:returntype", Promise)
], UserProfileController.prototype, "editUserProfile", null);
__decorate([
    (0, swagger_1.ApiTags)('User Profile'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserProfileController.prototype, "remove", null);
UserProfileController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_profile_service_1.UserProfileService])
], UserProfileController);
exports.UserProfileController = UserProfileController;
//# sourceMappingURL=user-profile.controller.js.map