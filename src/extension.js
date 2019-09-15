/* -*- Mode: js2; indent-tabs-mode: t; c-basic-offset: 4; tab-width: 4 -*-  */
/*
 * extension.js
 * Copyright (C) 2016 Jan Trejbal <jan.trejbal@gmail.com> (Docker integration)
 * Copyright (C) 2019 Jami Kettunen <jami.kettunen@protonmail.com> (VMware Integration)
 * 
 * VMware Integration is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the
 * Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * VMware Integration is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 * \
 * You should have received a copy of the GNU General Public License along
 * with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
const Gtk = imports.gi.versions.Gtk = '3.0';

const Config = imports.misc.config;

// Other javascript files in the vmware-integration@jami.kettunen.protonmail.com directory are accesible via Extension.<file name>
const Extension = imports.misc.extensionUtils.getCurrentExtension();
const VMwareNetworkManager = Extension.imports.VMwareNetworkManager;

let extensionName = Extension.dir.get_basename();
let matchRegExp = /^Ethernet \(vmnet[0-9]+\)$|^$/i;

let _instance_vmwareNetworkManager;

function createVMwareNetworkManager() {
	_instance_vmwareNetworkManager = new VMwareNetworkManager.VMwareNetworkManager(extensionName, matchRegExp);
}

function destroyVMwareNetworkManager() {
	_instance_vmwareNetworkManager.destroy();
	_instance_vmwareNetworkManager = null;
}

function enable() {
	createVMwareNetworkManager();
}

function disable() {
	destroyVMwareNetworkManager();
}
