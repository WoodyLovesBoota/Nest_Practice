import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateMovieDto } from "./dto/update-user.dto";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  updateDoc,
  getFirestore,
} from "firebase/firestore";
import { db } from "../firebase/firebase.config";

@Injectable()
export class UserService {
  async getAll(): Promise<User[]> {
    const docRef = await getDoc(doc(db, "User", "USER_DOCS_ID"));

    return docRef.data()["user"];
  }

  async getOne(uid: number): Promise<User> {
    const docRef = await getDoc(doc(db, "User", "USER_DOCS_ID"));
    const total = docRef.data()["user"];
    const target = total.find((user) => user.uid === uid);
    if (!target) {
      throw new NotFoundException(`Movie with Id ${uid} is not exist`);
    }
    return target;
  }

  async deleteOne(uid: string): Promise<void> {
    const docRef = doc(db, "User", "USER_DOCS_ID");
    const currentDoc = await getDoc(docRef);
    const current = currentDoc.data()["user"];
    const targetIndex = current.findIndex((user) => user.uid === Number(uid));
    if (targetIndex === -1) {
      throw new NotFoundException(`Movie with Id ${uid} is not exist`);
    }
    const newUser = [...current.slice(0, targetIndex), ...current.slice(targetIndex + 1)];
    await updateDoc(docRef, { user: newUser });
  }

  async create(userData: CreateUserDto): Promise<void> {
    const docRef = doc(db, "User", "USER_DOCS_ID");
    const currentDoc = await getDoc(docRef);
    const current = currentDoc.data()["user"];
    await updateDoc(docRef, { user: [{ uid: 10003, ...userData }, ...current] });
  }

  async update(uid: string, updateData: UpdateMovieDto): Promise<void> {
    const docRef = doc(db, "User", "USER_DOCS_ID");
    const currentDoc = await getDoc(docRef);
    const current = currentDoc.data()["user"];
    const targetIndex = current.findIndex((user) => user.uid === Number(uid));

    if (targetIndex === -1) {
      throw new NotFoundException(`Movie with Id ${uid} is not exist`);
    }

    const newUser = [
      ...current.slice(0, targetIndex),
      { uid: Number(uid), ...updateData },
      ...current.slice(targetIndex + 1),
    ];
    await updateDoc(docRef, { user: newUser });
  }
}
