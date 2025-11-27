import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIcon } from "@angular/material/icon";
import { SiAcademicCapIcon } from "@semantic-icons/heroicons/24/solid";
import { SiExclamationCircleIcon } from '@semantic-icons/heroicons/24/solid';

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  biography: string;
  position: string;
  country: string;
  status: 'Active' | 'Inactive';
  selected?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  url?: string;
  icon?: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIcon, SiExclamationCircleIcon],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css']
})
export class UserList implements OnInit {
  users: User[] = [];
  searchTerm: string = '';
  selectAll: boolean = false;
  
  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 20;
  totalItems: number = 2290;
  
  // Modals
  showEditModal: boolean = false;
  showAddModal: boolean = false;
  showDeleteModal: boolean = false;
  selectedUser: User | null = null;
  
  // Breadcrumbs
  breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', url: '/', icon: 'home' },
    { label: 'Users', url: '/users' },
    { label: 'List' }
  ];

  // Form data
  editForm = {
    firstName: '',
    lastName: '',
    email: '',
    position: '',
    currentPassword: '',
    newPassword: '',
    biography: ''
  };

  addForm = {
    firstName: '',
    lastName: '',
    email: '',
    position: '',
    biography: ''
  };

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    // TODO: Replace with actual API call
    this.users = [
      {
        id: 1,
        name: 'Bonnie Green',
        email: 'bonnie@flowbite.com',
        avatar: 'bonnie-green.png',
        biography: '👨‍💻Full-stack web developer. Open-source contributor.',
        position: 'React Developer',
        country: 'United States',
        status: 'Active'
      },
      // Add more mock data as needed
    ];
  }

  onSearch(): void {
    // TODO: Implement search functionality
    console.log('Searching for:', this.searchTerm);
  }

  toggleSelectAll(): void {
    this.users.forEach(user => user.selected = this.selectAll);
  }

  toggleUserSelection(user: User): void {
    user.selected = !user.selected;
    this.selectAll = this.users.every(u => u.selected);
  }

  openAddModal(): void {
    this.showAddModal = true;
    this.resetAddForm();
  }

  closeAddModal(): void {
    this.showAddModal = false;
  }

  openEditModal(user: User): void {
    this.selectedUser = user;
    this.showEditModal = true;
    this.populateEditForm(user);
  }

  closeEditModal(): void {
    this.showEditModal = false;
    this.selectedUser = null;
  }

  openDeleteModal(user: User): void {
    this.selectedUser = user;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.selectedUser = null;
  }

  populateEditForm(user: User): void {
    const [firstName, lastName] = user.name.split(' ');
    this.editForm = {
      firstName: firstName || '',
      lastName: lastName || '',
      email: user.email,
      position: user.position,
      currentPassword: '',
      newPassword: '',
      biography: user.biography
    };
  }

  resetAddForm(): void {
    this.addForm = {
      firstName: '',
      lastName: '',
      email: '',
      position: '',
      biography: ''
    };
  }

  onAddUser(): void {
    // TODO: Implement add user functionality
    console.log('Adding user:', this.addForm);
    this.closeAddModal();
  }

  onEditUser(): void {
    // TODO: Implement edit user functionality
    console.log('Editing user:', this.editForm);
    this.closeEditModal();
  }

  onDeleteUser(): void {
    // TODO: Implement delete user functionality
    console.log('Deleting user:', this.selectedUser);
    this.closeDeleteModal();
  }

  onExport(): void {
    // TODO: Implement export functionality
    console.log('Exporting users');
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadUsers();
    }
  }

  nextPage(): void {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.loadUsers();
    }
  }

  get paginationStart(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get paginationEnd(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }

  isActive(user: User): boolean {
    return user.status === 'Active';
  }
}