
import React, { useState } from 'react';
import {
  Shield,
  Users,
  UserCheck,
  UserX,
  Search,
  Filter,
  Plus,
  ChevronDown,
  Mail,
  Key
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form';

// Mock user data - would be fetched from backend in a real app
const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'student', status: 'active', joined: '2023-01-15', problemsPosted: 12, problemsSolved: 23 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'student', status: 'active', joined: '2023-02-20', problemsPosted: 5, problemsSolved: 17 },
  { id: 3, name: 'Mark Wilson', email: 'mark@example.com', role: 'teacher', status: 'pending', joined: '2023-03-10', problemsPosted: 0, problemsSolved: 8 },
  { id: 4, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'student', status: 'inactive', joined: '2023-01-05', problemsPosted: 3, problemsSolved: 2 },
  { id: 5, name: 'Robert Chen', email: 'robert@example.com', role: 'admin', status: 'active', joined: '2022-12-10', problemsPosted: 8, problemsSolved: 31 },
  { id: 6, name: 'Emily Davis', email: 'emily@example.com', role: 'student', status: 'active', joined: '2023-04-15', problemsPosted: 7, problemsSolved: 9 },
  { id: 7, name: 'Michael Brown', email: 'michael@example.com', role: 'student', status: 'pending', joined: '2023-03-22', problemsPosted: 1, problemsSolved: 4 },
  { id: 8, name: 'Lisa Garcia', email: 'lisa@example.com', role: 'teacher', status: 'active', joined: '2023-01-18', problemsPosted: 0, problemsSolved: 15 },
];

type UserStatus = 'active' | 'pending' | 'inactive';
type UserRole = 'student' | 'teacher' | 'admin';

interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  joined: string;
  problemsPosted: number;
  problemsSolved: number;
}

const AdminDashboard = () => {
  const isMobile = useIsMobile();
  const [searchTerm, setSearchTerm] = useState('');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [statusFilter, setStatusFilter] = useState<UserStatus | 'all'>('all');
  const [roleFilter, setRoleFilter] = useState<UserRole | 'all'>('all');
  
  // Filter users based on search term and filters
  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    
    return matchesSearch && matchesStatus && matchesRole;
  });

  const toggleSelectUser = (userId: number) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId) 
        : [...prev, userId]
    );
  };

  const selectAllUsers = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map(user => user.id));
    }
  };

  const getStatusColor = (status: UserStatus) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'pending': return 'bg-amber-500';
      case 'inactive': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div className="flex items-center gap-3 mb-4 sm:mb-0">
          <Shield className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage users and system settings</p>
          </div>
        </div>
        
        <div className="stats flex flex-col sm:flex-row gap-3 text-sm">
          <Card className="p-3 min-w-[120px]">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span className="font-medium">{mockUsers.length}</span>
              <span className="text-muted-foreground">Total Users</span>
            </div>
          </Card>
          
          <Card className="p-3 min-w-[120px]">
            <div className="flex items-center gap-2">
              <UserCheck className="h-4 w-4 text-green-500" />
              <span className="font-medium">{mockUsers.filter(u => u.status === 'active').length}</span>
              <span className="text-muted-foreground">Active</span>
            </div>
          </Card>
          
          <Card className="p-3 min-w-[120px]">
            <div className="flex items-center gap-2">
              <UserX className="h-4 w-4 text-red-500" />
              <span className="font-medium">{mockUsers.filter(u => u.status === 'inactive').length}</span>
              <span className="text-muted-foreground">Inactive</span>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Search and filters */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search users..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setIsFiltersOpen(!isFiltersOpen)}>
                <Filter className="mr-2 h-4 w-4" />
                Filters
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
              </Button>
              
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add User
              </Button>
            </div>
          </div>
          
          <Collapsible open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
            <CollapsibleContent className="pt-4">
              <div className="flex flex-wrap gap-4">
                <div className="space-y-1">
                  <FormLabel>Status</FormLabel>
                  <div className="flex flex-wrap gap-2">
                    {(['all', 'active', 'pending', 'inactive'] as const).map(status => (
                      <Button 
                        key={status}
                        variant={statusFilter === status ? "default" : "outline"}
                        size="sm"
                        onClick={() => setStatusFilter(status)}
                      >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-1">
                  <FormLabel>Role</FormLabel>
                  <div className="flex flex-wrap gap-2">
                    {(['all', 'student', 'teacher', 'admin'] as const).map(role => (
                      <Button 
                        key={role}
                        variant={roleFilter === role ? "default" : "outline"}
                        size="sm"
                        onClick={() => setRoleFilter(role)}
                      >
                        {role.charAt(0).toUpperCase() + role.slice(1)}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
      
      {/* Users table */}
      <Card className="mb-6">
        <CardHeader className="pb-0">
          <CardTitle>Users</CardTitle>
          <CardDescription>
            Manage user accounts, permissions and status
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-0">
          <ScrollArea className="h-[400px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox 
                      checked={selectedUsers.length > 0 && selectedUsers.length === filteredUsers.length} 
                      onCheckedChange={selectAllUsers}
                    />
                  </TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">Joined</TableHead>
                  <TableHead className="hidden md:table-cell">Posted</TableHead>
                  <TableHead className="hidden md:table-cell">Solved</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map(user => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Checkbox 
                        checked={selectedUsers.includes(user.id)}
                        onCheckedChange={() => toggleSelectUser(user.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{user.name}</span>
                        <span className="text-muted-foreground text-xs">{user.email}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="capitalize">{user.role}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${getStatusColor(user.status)}`} />
                        <span className="capitalize">{user.status}</span>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{user.joined}</TableCell>
                    <TableCell className="hidden md:table-cell">{user.problemsPosted}</TableCell>
                    <TableCell className="hidden md:table-cell">{user.problemsSolved}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Key className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
        
        <CardFooter className="flex justify-between border-t p-4">
          <div className="text-sm text-muted-foreground">
            Showing <b>{filteredUsers.length}</b> of <b>{mockUsers.length}</b> users
          </div>
          
          <div className="flex gap-2">
            {selectedUsers.length > 0 && (
              <>
                <Button variant="outline" size="sm">
                  Reset Password
                </Button>
                <Button variant="outline" size="sm">
                  Change Role
                </Button>
              </>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdminDashboard;
