/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

﻿/**
 * @author Ashraf Morningstar
 * @github https://github.com/AshrafMorningstar
 * @project Premium Personal Portfolio
 * @description Architecting the Digital Future with Quantum Precision.
 */
// Data access layer for portfolio data
import {
  AUTHOR,
  WORK_EXPERIENCE,
  EDUCATION,
  PROJECTS,
  type Author,
  type WorkExperience,
  type Education,
  type Project,
} from "@/constants/portfolio";

export async function getAuthorData(): Promise<Author | null> {
  return AUTHOR;
}

export async function getWorkExperience(): Promise<WorkExperience[]> {
  return WORK_EXPERIENCE;
}

export async function getEducation(): Promise<Education[]> {
  return EDUCATION;
}

export async function getProjects(): Promise<Project[]> {
  return PROJECTS;
}


