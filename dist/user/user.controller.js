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
exports.MoviesController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./dto/create-user.dto");
let MoviesController = class MoviesController {
    constructor(userService) {
        this.userService = userService;
    }
    async getAll() {
        return await this.userService.getAll();
    }
    getOne(uid) {
        return this.userService.getOne(uid);
    }
    create(userData) {
        return this.userService.create(userData);
    }
    remove(uid) {
        return this.userService.deleteOne(uid);
    }
    update(uid, userData) {
        return this.userService.update(uid, userData);
    }
};
exports.MoviesController = MoviesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("/:uid"),
    __param(0, (0, common_1.Param)("uid")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], MoviesController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)("/:uid"),
    __param(0, (0, common_1.Param)("uid")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MoviesController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)("/:uid"),
    __param(0, (0, common_1.Param)("uid")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], MoviesController.prototype, "update", null);
exports.MoviesController = MoviesController = __decorate([
    (0, common_1.Controller)("user"),
    __metadata("design:paramtypes", [user_service_1.UserService])
], MoviesController);
//# sourceMappingURL=user.controller.js.map